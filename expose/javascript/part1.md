1. values added: 20
2. final result: 20
3. Var variables has no block scope -> increases chances of collisions or uninspected/unintendet overwrite and/or redeclaration.
4. values added: 20
5. Error, because 'let result' got a block scope and is not accessible.
6. Error, bacause it is tried to reassign result (crash)
7. Error, bacause result is not in the block.
