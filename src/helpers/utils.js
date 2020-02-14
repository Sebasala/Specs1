import Excel from 'exceljs/dist/es5/exceljs.browser';
import sizeOf from 'image-size';
import { logoBase64 } from './ariadna';
import moment from 'moment';
import { sessionTime } from './env';

export const compareStringDate = (obj1, obj2) => {
  if (new Date(obj1.date) < new Date(obj2.date)) {
    return -1;
  }
  if (new Date(obj1.date) > new Date(obj2.date)) {
    return 1;
  }
  return 0;
};

export const reziseDimensions = (width, height, max) => {
  let conversionFactor = height > width ? max / height : max / width;
  return {
    height: height * conversionFactor,
    width: width * conversionFactor
  };
};

export const loadState = () => {
  try {
    const stateTimestamp = localStorage.getItem('stateTimestamp') ? Number(localStorage.getItem('stateTimestamp')) : 0;
    if (moment().diff(moment(stateTimestamp), 'minutes') > sessionTime) {
      localStorage.removeItem('state');
      localStorage.removeItem('stateTimestamp');
      return undefined;
    }
    const serializedData = localStorage.getItem('state');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem('state', serializedData);
    localStorage.setItem('stateTimestamp', moment().valueOf());
  } catch (err) {

  }
}

export const rowManageClosure = (imageHeight, imageWidth, cellWidth = 64) => {
  let startRow = 11;
  let imageColumn = 14;
  let imageRow = 9;
  let newImageWidth = 500;
  let newImageHeight = (newImageWidth / imageWidth) * imageHeight;

  const calculateImageRow = cellHeight => {
    if (newImageHeight > 0) {
      if (newImageHeight < cellHeight) {
        imageRow += newImageHeight / cellHeight;
        newImageHeight = 0;
      } else {
        newImageHeight -= cellHeight;
        imageRow += 1;
      }
    }
  }

  return {
    getRow: () => startRow,
    getImageRow: () => {
      while (newImageHeight > 0) {
        imageRow += 1;
        newImageHeight -= 20;
      }
      return imageRow;
    },
    addRow: (cellHeight = 20) => {
      startRow += 1;
      calculateImageRow(cellHeight);
    },
    getImageColumn: () => {
      while (newImageWidth > 0) {
        if (newImageWidth < cellWidth) {
          imageColumn += newImageWidth / cellWidth;
          newImageWidth = 0;
        } else {
          newImageWidth -= cellWidth;
          imageColumn += 1;
        }
      }
      return imageColumn;
    },
  };
}

export const exportSpecs = specList => {
  return new Promise((resolve, reject) => {
    if (specList.length > 0) {
      const workbook = new Excel.Workbook();
      specList.forEach((spec, index) => {
        const campaign = spec.campaign;
        const account = spec.campaign.account;
        const content = spec.content;
        const creative = spec.content.creative;
        const adFormat = spec.content.creative.adFormat;
        const medium = spec.content.creative.adFormat.medium;

        const contentFormat = spec.content.contentFormat;
        const contentType = spec.content.contentFormat.contentType;

        let rowManage;
        if (creative.image) {
          const base64Image = Buffer.from(creative.image.data.data, 'base64');
          const dimensions = sizeOf(base64Image);
          rowManage = rowManageClosure(dimensions.height, dimensions.width, 64);
        } else {
          rowManage = rowManageClosure(0, 0, 64);
        }
        const sheet = workbook.addWorksheet(`${index + 1}-${campaign.name}-${medium.name}-${adFormat.name}`);
        // Agrega fondo blanco a la hoja
        for (let i = 1; i <= 100; i += 1) {
          const row = sheet.getRow(i);
          for (let j = 1; j <= 100; j += 1) {
            row.getCell(j).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: {
                argb: 'FFFFFF',
              },
            };
          }
        }
        const logo = workbook.addImage({
          base64: logoBase64,
          extension: 'png',
        });
        sheet.addImage(logo, {
          tl: {
            col: 2,
            row: 1,
          },
          br: {
            col: 5,
            row: 5,
          },
        });
        if (account.logo) {
          const accountLogo = workbook.addImage({
            base64: `data:${account.logo.contentType};base64,${Buffer.from(account.logo.data.data, 'base64').toString('base64')}`,
            extension: account.logo.contentType.split('/')[1],
          });
          sheet.addImage(accountLogo, {
            tl: {
              col: 10,
              row: 1,
            },
            br: {
              col: 13,
              row: 5,
            },
          });
        }
        sheet.mergeCells('C7:M7');
        sheet.getCell('C7').value = `CAMPAÑA: ${campaign.name}`;
        sheet.getCell('C7').fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: 'FFC000',
          },
        };
        sheet.getCell('C7').alignment = {
          horizontal: 'center',
        };
        sheet.mergeCells('C8:M8');
        sheet.getCell('C8').value = `MEDIO: ${medium.name.toUpperCase()} - FORMATO: ${adFormat.name.toUpperCase()}`;
        sheet.getCell('C8').fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: 'FFC000',
          },
        };
        sheet.getCell('C8').alignment = {
          horizontal: 'center',
        };
        sheet.mergeCells('C10:M10');
        sheet.getCell('C10').value = 'TEXTO';
        sheet.getCell('C10').fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: 'FFC000',
          },
        };
        sheet.getCell('C10').alignment = {
          horizontal: 'center',
        };
        const itemsNumber = spec.quantity ? spec.quantity : 1;
        for (let i = 0; i < itemsNumber; i += 1) {
          if (itemsNumber > 1) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = `Elemento ${i + 1}`;
            sheet.getCell(`C${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
          }
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
          sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
          sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'SPECS';
          sheet.getCell(`F${rowManage.getRow()}`).value = 'CONTENIDO';
          sheet.getCell(`L${rowManage.getRow()}`).value = 'CARACTERES';
          if (creative.text) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = `Texto: ${creative.text} caracteres`;
            sheet.getCell(`F${rowManage.getRow()}`).dataValidation = {
              type: 'textLength',
              operator: 'lessThan',
              showErrorMessage: true,
              allowBlank: true,
              formulae: [parseInt(creative.text, 10) + 1],
              error: `El texto no debe exceder los ${creative.text} caracteres`,
            };
            sheet.getCell(`L${rowManage.getRow()}`).value = {
              formula: `${creative.text}-LEN(F${rowManage.getRow()})`,
            };
          }
          if (creative.title) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = `Título: ${creative.title} caracteres`;
            sheet.getCell(`F${rowManage.getRow()}`).dataValidation = {
              type: 'textLength',
              operator: 'lessThan',
              showErrorMessage: true,
              allowBlank: true,
              formulae: [parseInt(creative.title, 10) + 1],
              error: `El texto no debe exceder los ${creative.title} caracteres`,
            };
            sheet.getCell(`L${rowManage.getRow()}`).value = {
              formula: `${creative.title}-LEN(F${rowManage.getRow()})`,
            };
          }

          if (creative.description) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = `Descripción: ${creative.description} caracteres`;
            sheet.getCell(`F${rowManage.getRow()}`).dataValidation = {
              type: 'textLength',
              operator: 'lessThan',
              showErrorMessage: true,
              allowBlank: true,
              formulae: [parseInt(creative.description, 10) + 1],
              error: `El texto no debe exceder los ${creative.description} caracteres`,
            };
            sheet.getCell(`L${rowManage.getRow()}`).value = {
              formula: `${creative.description}-LEN(F${rowManage.getRow()})`,
            };
          }
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
          sheet.mergeCells(`F${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'URL destino:';
          sheet.getCell(`C${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'A5A5A5',
            },
          };
          sheet.getCell(`F${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'A5A5A5',
            },
          };
        }
        // Se deja una fila intermedia
        rowManage.addRow();
        if (content.observation && content.observation.trim() !== '') {
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Observaciones';
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            horizontal: 'center',
          };
          sheet.getCell(`C${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'FFC000',
            },
          };
          rowManage.addRow(100);
          const row = sheet.getRow(rowManage.getRow());
          row.height = 100;
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = content.observation;
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            wrapText: true,
          };
        }

        if (adFormat.name.toLowerCase().includes('lead generation')) {
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Descripción adicional formulario';
          sheet.getCell(`C${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'FFC000',
            },
          };
          rowManage.addRow(100);
          let row = sheet.getRow(rowManage.getRow());
          row.height = 100;
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Este texto se ve al darle clic al anuncio y explica un poco de que trata la campaña, ya que después se llena el formulario, el usuario no tiene ir al Landing, por lo que este texto debe ser más que suficiente para que el usuario entienda la campaña.';
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            wrapText: true,
          };
          rowManage.addRow(100);
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Campos del formulario';
          sheet.getCell(`C${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'FFC000',
            },
          };
          rowManage.addRow(100);
          row = sheet.getRow(rowManage.getRow());
          row.height = 100;
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Ejemplo: \n Nombre\nApellido\nTeléfono\nCiudad';
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            wrapText: true,
          };
        }

        // Se deja una fila intermedia
        rowManage.addRow();

        if (contentType) {
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = adFormat.name;
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            horizontal: 'center',
          };
          sheet.getCell(`C${rowManage.getRow()}`).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'FFC000',
            },
          };
          rowManage.addRow();
          sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
          sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
          sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
          sheet.getCell(`C${rowManage.getRow()}`).value = 'Creativo';
          sheet.getCell(`C${rowManage.getRow()}`).alignment = {
            horizontal: 'center',
          };
          sheet.getCell(`F${rowManage.getRow()}`).value = contentType.name;
          sheet.getCell(`F${rowManage.getRow()}`).alignment = {
            horizontal: 'center',
          };

          if (content.size) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = 'Tamaño en pixeles';
            sheet.getCell(`C${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
            sheet.getCell(`F${rowManage.getRow()}`).value = content.size;
            sheet.getCell(`F${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
          }
          if (contentFormat) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = 'Formato';
            sheet.getCell(`C${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
            sheet.getCell(`F${rowManage.getRow()}`).value = contentFormat.name;
            sheet.getCell(`F${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
          }
          if (content.weight) {
            rowManage.addRow();
            sheet.mergeCells(`C${rowManage.getRow()}:E${rowManage.getRow()}`);
            sheet.mergeCells(`F${rowManage.getRow()}:K${rowManage.getRow()}`);
            sheet.mergeCells(`L${rowManage.getRow()}:M${rowManage.getRow()}`);
            sheet.getCell(`C${rowManage.getRow()}`).value = 'Peso';
            sheet.getCell(`C${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
            sheet.getCell(`F${rowManage.getRow()}`).value = content.weight;
            sheet.getCell(`F${rowManage.getRow()}`).alignment = {
              horizontal: 'center',
            };
          }
        }

        if (creative.image) {
          const image = workbook.addImage({
            base64: `data:${creative.image.contentType};base64,${Buffer.from(creative.image.data.data, 'base64').toString('base64')}`,
            extension: creative.image.contentType.split('/')[1],
          });
          sheet.addImage(image, {
            tl: {
              col: 14,
              row: 9,
            },
            br: {
              col: rowManage.getImageColumn(),
              row: rowManage.getImageRow(),
            },
            editAs: 'oneCell',
          });
        }
      });

      workbook.xlsx.writeBuffer({ base64: true }).then(xlsx => {
        const a = document.createElement('a');
        const data = new Blob([xlsx], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(data);
        a.href = url;
        a.download = `Specs_${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}.xlsx`;
        document.body.appendChild(a);
        a.click();
        resolve();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 1000);
      });
    }
  })
}