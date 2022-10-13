const FileIO = require("../fileIO");
const fs = require("fs");

jest.mock("fs");

describe("FileIO", () => {
	describe("read", () => {
		it("should call fs.readFileSync with the passed in 'file' argument", () => {
			// TODO: Your code here
			const fileIo = new FileIO();
			const file = "message.txt";
			let data;

			fs.readFileSync.mockReturnValue("Hello World");
			data = fileIo.read(file);

			expect(data).toEqual("Hello World");
			expect(fs.readFileSync).lastCalledWith(file, "utf8");
		});
	});

	describe("write", () => {
		it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
			// TODO: Your code here
			const fileIo = new FileIO();
			const path = "message.txt";
			const data = "Hello World";

			fileIo.write(path, data);

			expecet(fs.writeFileSync).lastCalledWith(path, data);
		});
	});
});
