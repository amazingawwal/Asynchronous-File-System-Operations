// Task 1: Read and Display File Contents with Try....Catch

const fs = require('fs/promises');

async function readFileAsync(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Error - unable to read file:', err);
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


// Task 2: Write Content to File with Async/Await

const fsw = require('fs/promises');

const content = 'This is my task submission'; 
const filename = './test-files/output.txt';

async function writeFileAsync (filename, content){
    try {
        await fsw.writeFile(filename, content);
        console.log('File written successfully!');
    } catch (err) {
        console.log('Error writing file', err);
    }
};

writeFileAsync(filename, content);


// Task 3: Copy File from Source to Destination