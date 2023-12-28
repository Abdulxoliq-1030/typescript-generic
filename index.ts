function sumFunc<T>(array: T[]) {
    return array[0];
}


const numbers = [1, 2, 3, 4];
const firstNum = sumFunc(numbers);

const strings = ["asd", "asd", "sdfa"];
const characters = sumFunc(strings);


type ApiResponse<Data> = {
    data: Data
    isError: boolean
}


const response: ApiResponse<{ name: string }> = {
    data: {
        name: "John"
    },
    isError: false
}