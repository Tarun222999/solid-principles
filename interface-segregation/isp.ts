// interface DocumentManger{
//     openDoc():void
//     closeDoc():void
//     saveDoc():void
//     scanDoc():void
// }

//no code should be forced to depend on methid it does not use
interface DocumentOpener{
    openDoc():void
}
interface DocumentCloser{
    closeDoc():void
}

interface DocumentSave{
    saveDoc():void
}

interface DocumentScan{
    scanDoc():void
}



class BasicEditor implements DocumentCloser,DocumentOpener,DocumentSave{
    openDoc(): void {
        console.log()
    }

    closeDoc(): void {
        console.log()
    }

    saveDoc(): void {
        console.log()
    }
}


class AdvEditor implements DocumentCloser,DocumentOpener,DocumentSave,DocumentScan{
    openDoc(): void {
        console.log()
    }

    closeDoc(): void {
        console.log()
    }

    saveDoc(): void {
        console.log()
    }

    scanDoc(): void {
        console.log()
    }

}