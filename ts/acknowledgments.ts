/*
 Copyright (c) 2020 - 2021 https://eudes.codes/
 @author: Eudes Evrard BOBBOH - EBO
 @country: France
 @email: evrard@eudes.codes
 @website: https://eudes.codes/

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

/* eslint-disable no-undef */
import { join } from 'path';
import * as fs from 'fs';

//declare the path
const ROOT_NODE_MODULES_DIRECTORY = join(process.cwd(), 'node_modules');
const ROOT_PACKAGE_PATH = join(process.cwd(), 'package.json');
const ROOT_ACKNOWLEDGMENTS = join(process.cwd(), 'ACKNOWLEDGMENTS.md');

/**
 * @function
 * @name verifIfLicenseFileExist
 * @param { string } fileName
 * @returns
 */
const verifIfLicenseFileExist = (fileName: any): boolean => {
    return /^licen[s|c]e/i.test(fileName);
};

const GetLicenseContent = async (dependencie: string): Promise<any> => {
    // license content
    let content: any = '';

    // dependency directory
    const DEPENDENCIE_PATH: string = join(ROOT_NODE_MODULES_DIRECTORY, dependencie);

    // find license file in dependency directory
    const licenseFile = (await fs.promises.readdir(DEPENDENCIE_PATH)).find(verifIfLicenseFileExist);

    if (licenseFile) {
        // read license file content
        content = (
            await fs.promises.readFile(join(DEPENDENCIE_PATH, licenseFile), {
                encoding: 'utf-8',
            })
        ).trim();
    } else {
        const DEPENDENCIE_PACKAGE_PATH = join(DEPENDENCIE_PATH, 'package.json');

        // read package.json file in depency directory
        const { license } = JSON.parse(
            await fs.promises.readFile(DEPENDENCIE_PACKAGE_PATH, 'utf8'),
        );
        if (license) content = `License ${license}`;
    }
    //
    return [`###  ${dependencie}`, '', content].join('\n');
};

(async () => {
    const { dependencies = {} } = require(ROOT_PACKAGE_PATH);

    const outPut: string[] = [];

    for (let i = 0; i < [...Object.keys(dependencies)].length; i++) {
        outPut.push(await GetLicenseContent([...Object.keys(dependencies)][i]));
    }

    // write file
    await fs.promises.writeFile(ROOT_ACKNOWLEDGMENTS, outPut.join('\n'), {
        encoding: 'utf-8',
    });
})();
