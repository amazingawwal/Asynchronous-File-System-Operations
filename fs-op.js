// Task 1: Read and Display File Contents with Try....Catch

const fs = require('fs/promises');

async function readFileAsync() {
  try {
    const data = await fs.readFile('./test-files/sample.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Error - unable to read file:', err);
  }
}

readFileAsync();

// --SAMPLE OUTPUT--
// OUTPUT with existing file - Hello there!
// OUTPUT with non existing file - Error - unable to read file: [Error: ENOENT: no such file or directory, open 'C:\Users\dell\OneDrive\desktop\KodeCamp\Task 2\fs
//                                      -task\test-files\task2.txt'] {
//                                       errno: -4058,
//                                       code: 'ENOENT',
//                                       syscall: 'open',
//                                       path: 'C:\\Users\\dell\\OneDrive\\desktop\\KodeCamp\\Task 2\\fs-task\\test-files\\task2.txt'
//                                       }


class LoadFile {
    constructor(filePath){
        this.filePath = filePath
    };

    setFilePath(){
        return this.filePath
    };
};

class readFile {
     constructor(filePath){
        this.filePath = filePath
    };

    async readFileAsync (){
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            console.log(data)
        } catch (error) {
            console.error('Error - unable to read file:', error);
        }
    };
};

const filePath = new LoadFile('./test-files/sample.txt').setFilePath()
const readText = new readFile(filePath);

// console.log(filePath)
readText.readFileAsync();