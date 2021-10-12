export class Book {

  private _id: number;
  private _title: string;
  private _author: string;
  private _status: string;

  static bookLength = 1;

  constructor(title: string, author: string, status: string) {
    this._id = Book.bookLength;
    this._title = title;
    this._author = author;
    this._status = status;

    Book.bookLength++;
  }

	public get id(): number {
		return this._id;
	}

	public get title(): string {
		return this._title;
	}

	public get author(): string {
		return this._author;
	}

	public get status(): string {
		return this._status;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set title(value: string) {
		this._title = value;
	}

	public set author(value: string) {
		this._author = value;
	}

	public set status(value: string) {
		this._status = value;
	}

}
