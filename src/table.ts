class Table {

    /**
     * Конструктор
     * 
     * @param headers Названия заголовков столбиков
     */
    constructor(headers: string[]) {
        this.headers = headers;
        this.rows = [];
    }

    private headers: string[];
    private rows: string[][];

    /**
     * Функция добавления данных
     * 
     * @param data Данные для добавления в таблицу
     * @return true - данные добавлены, false - данные не добавлены
     */
    public add(data: string[]): boolean {
        if(data.length !== this.headers.length)
            return false;
        
        this.rows.push(data);
        
        return true;
    }

    /**
     * Функция для удаления данных
     * @param index Индекс строки для удаления
     * @return true - данные удалены, false - данные не удалены
     */
    public remove(index: number): boolean {
        if (index <= -1 || index >= this.rows.length) return false;
        
        this.rows.splice(index, 1);
        return true;
    }

    /** 
     * Функция для вывода данных таблицы в консоль
     */
    public print(): void {
        const headerString: string = this.headers.join(", ");
        const borderString: string = "=".repeat(headerString.length);

        console.log(borderString);
        console.log(headerString);
        console.log(borderString);

        for (let row of this.rows) {
            console.log(row.join(", "));
        }
        console.log(borderString);
    }

}

export default Table;