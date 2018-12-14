const getNewNode = function () {
    return (
        {
            data: null,
            right: null,
            left: null
        }
    )
}



const createBinaryTree  = function() {
    let root = getNewNode()
    let dataList = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    populateBinaryTree(root, dataList)
    return root
}



const populateBinaryTree = function (root, dataList) {
    if (dataList.length === 0) {
        return
    }
    if (dataList.length === 1) {
        root.data = dataList[0]
        return
    }
    if (dataList.length === 2) {
        root.left = getNewNode()
        populateBinaryTree(root.left, dataList.filter((data, index) => index < 1))
        root.data = dataList[1]
        return
    }

    const remainder = dataList.length % 2
    const position = (dataList.length - remainder) / 2

    let leftList = dataList.filter((data, index) => index < position)
    let rightList = dataList.filter((data, index) => index > position)

    root.left = getNewNode()
    populateBinaryTree(root.left, leftList)

    root.data = dataList[position]

    root.right = getNewNode()
    populateBinaryTree(root.right, rightList)
}



let DFSInorder = function (binTree, charArray) {
    if (binTree === null) {
        return
    }

    DFSInorder(binTree.left, charArray) // stops when null child is reached
    charArray.push(binTree.data)
    DFSInorder(binTree.right, charArray)
}



const binaryTree = createBinaryTree()



// resultArray = []
// DFSInorder(binaryTree, resultArray)
// const isBST = resultArray.filter((value, index) => {
//     if (index > 0 && resultArray[index - 1] > value) {
//         return value
//     }
// })


const findSuccessor = function(binaryTree, value) {
    if (binaryTree === null) return null

    const maxValue = findMax(binaryTree.right)
    if (maxValue === value) return 'no successor, last value'

    let dataObject = {
        isParent: false,
        result: null
    }

    // console.log(value)
    findValueSuccessor(binaryTree, value, dataObject)
    return dataObject.result
}

const findValueSuccessor = function(binaryTree, value, dataObject) {
    if (binaryTree === null) return
    console.log(binaryTree.data)

    if (binaryTree.data === value) {
        // console.log(value)
        if (binaryTree.right === null) {
            dataObject.isParent = true
            // console.log(dataObject.isParent)
        } else {
            dataObject.result = findMin(binaryTree.right)
        }
        // console.log(findMin(binaryTree.right))
        // console.log(result)

        return
    }

    if (value < binaryTree.data) {
        findValueSuccessor(binaryTree.left, value, dataObject)
    }

    if (value > binaryTree.data) {
        findValueSuccessor(binaryTree.right, value, dataObject)
    }
    if (dataObject.isParent) {
        if (dataObject.result === null) dataObject.result = binaryTree.data
        return
    }
}


const findMin = function (binaryTree) {
    if (binaryTree.left === null) return binaryTree.data

    return findMin(binaryTree.left)
}


const findMax = function(binaryTree) {
    if (binaryTree.right === null) {
        // console.log(binaryTree.data)
        return binaryTree.data
    }

    return findMax(binaryTree.right)
}



// console.log(binaryTree)
console.log(findSuccessor(binaryTree, 'f'))

// console.log((isBST.length === 0))