// Task 1: Read and Display File Contents with Try....Catch

const fs = require('fs/promises');

async function readFileAsync(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Error - unable to read file: ${filename}`, err);
  }
}

readFileAsync('./test-files/sample.txt');

// --SAMPLE OUTPUT--
// OUTPUT with existing file - Hello there!

// OUTPUT with non existing file - Error - unable to read file: [Error: ENOENT: no such file or directory, open 'C:\Users\dell\OneDrive\desktop\KodeCamp\Task 2\fs
//                                      -task\test-files\task2.txt'] {
//                                       errno: -4058,
//                                       code: 'ENOENT',
//                                       syscall: 'open',
//                                       path: 'C:\\Users\\dell\\OneDrive\\desktop\\KodeCamp\\Task 2\\fs-task\\test-files\\task2.txt'
//                                       }


// Task 2: Write Content to File with Async/Await function

const fsw = require('fs/promises');

const content = 'This is my task submission'; 
const filename = './test-files/output.txt';

async function writeFileAsync (filename, content){
    try {
        await fsw.writeFile(filename, content);
        console.log(`Content: ${content} written successfully to ${filename}!`);
    } catch (err) {
        console.log('Error writing file', err);
    }
};

writeFileAsync(filename, content);


// Task 3: Copy File from Source to Destination with Async/Await

const source = './test-files/sample.txt';
const destination = './test-files/backup/sample_backup.txt';

async function copyFileAsync(source, destination){
    try {
        if (source && destination) 
            await fs.copyFile(source, destination);
            console.log(`Successfully copied file from source:${source} to destination ${destination} `);
    } catch (error) {
        console.log('Error copying file from source to destination ');
    }
};

copyFileAsync(source, destination);


// Task 4: Append Content to Existing File with Async/Await

const existingFilename = './test-files/output.txt'
const appendContent = '\nAppended line 1\nAppended line 2'

async function appendFileAsync(existingFilename, appendContent){
    try {
        await fs.access(existingFilename);
        let data1 = await fs.readFile(existingFilename, 'utf-8');
        console.log(`Existing file content is: ${data1}`)
        await fs.appendFile(existingFilename, appendContent);
        let data2 = await fs.readFile(existingFilename, 'utf-8');
        console.log(`With appended content is: ${data2}`)
    } catch  {
        await fs.open(existingFilename, 'w');
        await fs.appendFile(existingFilename, appendContent);
        let data = await fs.readFile(existingFilename, 'utf-8');
        console.log(`Appended content is: ${data}`)
    };
};

appendFileAsync(existingFilename, appendContent);


// Task 5: List Directory Contents with Async/Await
const dirPath = './test-files/';
async function listDirectoryAsync(dirPath){
    try {
        const files = await fs.readdir(dirPath);
        files.forEach(async file=>{
            const fileStat = await fs.stat(`${dirPath}${file}`);
            console.log(`File Name: ${file}`)
            if (fileStat.isDirectory()) {
                console.log(`File Type: Directory`)
            }
            else{
            console.log(`File Type: Text File`)};
            console.log(`File Size: ${fileStat.size}`);
        })
    } catch (error) {
        console.log(error);
    }
};

listDirectoryAsync(dirPath)


// Task 6: Create and Delete Operations with Async/Await

// Create Directory Temp
const createDirPath = './test-files/temp';
async function createDirectoryAsync(dirPath){
    try {
        await fs.mkdir(dirPath)
    } catch (error) {
        console.log(`Error while creating Directory`)
    }
};
createDirectoryAsync(createDirPath);


// Create File with content
const fileContent = 'temporary file'; 
const contentFilename = './test-files/temp/test.txt';
async function createFileAsync (contentFilename, fileContent){
    try {
        await fs.writeFile(contentFilename, fileContent);
        console.log(` ${contentFilename} created successfully !`);
    } catch (err) {
        console.log('Error writing file', err);
    }
};
createFileAsync(contentFilename, fileContent);


// Function to delete file
const unlinkPath = './test-files/temp/test.txt'
async function  deleteFileAsync(filename){
    try {
        await fs.unlink(filename)
        console.log(`File deleted successfully`);
    } catch (error) {
        console.log(`Error deleting file`);
    }
};
deleteFileAsync(unlinkPath);


// Function to delete directory
const removeDir = './test-files/temp/'
async function  deleteDirectoryAsync(dirPath){
    try {
        await fs.rmdir(dirPath)
        console.log(`Folder/Directory deleted successfully`);
    } catch (error) {
        console.log(`Error deleting file`);
    }
};
deleteDirectoryAsync(removeDir);