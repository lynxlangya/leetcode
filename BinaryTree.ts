class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  root: TreeNode | null;
  constructor(root: TreeNode | null = null) {
    this.root = root;
  }

  insert(val: number): void {
    const node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  search(val: number): boolean {
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  inOrderTraversal(): number[] {
    const result: number[] = [];
    const dfs = (node: TreeNode | null) => {
      if (node === null) {
        return;
      }
      dfs(node.left);
      result.push(node.val);
      dfs(node.right);
    };
    dfs(this.root);
    return result;
  }
}

const bst = new BinaryTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);

console.log(bst.search(3)); // true
console.log(bst.search(8)); // false

console.log(bst.inOrderTraversal()); // [1, 3, 5, 7, 9]
