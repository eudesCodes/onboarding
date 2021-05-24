import { join } from 'path';
import * as fs from 'fs';

// eslint-disable-next-line no-undef
const ROOT_PACKAGE_PATH = join(process.cwd(), 'package.json');

/**
 *
 * @param { string } Path : file path
 * @returns any
 */
const HeaderComment = (Path: string): any => {
    // @constant  name dateOfCreation
    const dateOfCreation: number = 2020;
    // @constant  name currentDate
    const currentDate: number = new Date().getFullYear();

    const COPYRIGHT: string = ` Copyright (c) ${dateOfCreation} - ${currentDate} https://eudes.codes/`;
    const AUTHOR: string = ' @author: Eudes Evrard BOBBOH - EBO';
    const COUNTRY: string = ' @country: France';
    const E_MAIL: string = ' @email: evrard@eudes.codes';
    const WEBSITE: string = ' @website: https://eudes.codes/';
    const LICENSE: string = [
        ` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR`,
        ` IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,`,
        ` FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE`,
        ` AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER`,
        ` LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,`,
        ` OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE`,
        ` SOFTWARE.`,
    ].join('\n');

    // extensions
    const EXTENSIONS_TO_CHECK = new Set(['html', 'txt', 'md']);
    const FILE_EXTENSIONS = Path.split('.').pop();

    if (FILE_EXTENSIONS && !EXTENSIONS_TO_CHECK.has(FILE_EXTENSIONS))
        return ['/*', COPYRIGHT, AUTHOR, COUNTRY, E_MAIL, WEBSITE, '', LICENSE, '*/', '\n'].join(
            '\n',
        );

    // @return
    return ['<!--', COPYRIGHT, AUTHOR, COUNTRY, E_MAIL, WEBSITE, '', LICENSE, '-->', '\n'].join(
        '\n',
    );
};
//
(async () => {
    // eslint-disable-next-line no-undef
    const { files = [] } = await require(ROOT_PACKAGE_PATH);

    // write header comment
    await files?.forEach((Item: string) => {
        (async (path: string): Promise<void> => {
            fs.readFile(
                path,
                { encoding: 'utf-8' },
                async (_: any, data: string): Promise<string> => {
                    if (!data) return "error can't read the file";

                    await fs.promises.writeFile(
                        path,
                        HeaderComment(path) + data.split(HeaderComment(path)).join('\n'),
                        {
                            encoding: 'utf-8',
                        },
                    );

                    return 'success!';
                },
            );
        })(Item);
    });
})();

export { HeaderComment };
