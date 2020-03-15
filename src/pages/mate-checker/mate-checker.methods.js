export class Figures {
    constructor(state, positions, isProtected) {
        this.state = JSON.parse(JSON.stringify(state)); // DID DEEP COPY
        this.positions = { ...positions };
        this.isProtected = { ...isProtected };
        this.attackZone = 1;
        this.king = 10;
        this.queen = 20;
        this.horse = 30;
        this.bishop = 40;
        this.blackKing = 50;
    }
    //CHECKMATE CHECKING
    checkIsMate() {
        const selfPosition = this.blackKing;
        const [blackKingRow, blackKingInd] = this.positions[selfPosition];
        const isUnderAttack = this.isProtected[selfPosition];
        const _board = [...this.state];

        const valArr = [];
        for (let i = blackKingRow - 1; i <= blackKingRow + 1; i++) {
            if (!_board[i]) continue;
            for (let k = blackKingInd - 1; k <= blackKingInd + 1; k++) {
                if ((!_board[i][k] && _board[i][k] !== 0) || _board[i][k] === this.blackKing) continue;
                if (_board[i][k] > 1 && this.isProtected[_board[i][k]] === false) {
                    valArr.push(false);
                } else {
                    valArr.push(_board[i][k]);
                }
            }
        }
        console.log(valArr);
        if (valArr.includes(0) || valArr.includes(false)) {
            return "This isn't mate";
        } else if (!valArr.includes(0) && isUnderAttack === false) {
            return 'This is stalemate. Nobody wins';
        } else {
            return 'White wins.';
        }
    }

    //CHECK IF FIGURES BLOCKING ATACK
    isNotBlocking(rowNum, pos, selfPosition) {
        const curFigure = this.state[rowNum][pos];

        if (curFigure < 10 || curFigure === selfPosition) {
            return true;
        } else if (curFigure === 50) {
            this.isProtected = { ...this.isProtected, [curFigure]: true };
            return true;
        } else {
            this.isProtected = { ...this.isProtected, [curFigure]: true };
            return false;
        }
    }

    queenZone(selfPosition, rowNum, pos) {
        const whiteList = [selfPosition, this.blackKing];

        // FOR SKEW LINES
        this.bishopZone(selfPosition, rowNum, pos);

        // FOR - TO TOP STRAIGHT LINE
        loop: for (let i = rowNum; i >= 0; i--) {
            for (let k = pos; k < 8; k++) {
                if (k === pos) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }

        // FOR - TO BOTTOM STRAIGHT LINE
        loop: for (let i = rowNum; i < 8; i++) {
            for (let k = pos; k < 8; k++) {
                if (k === pos) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }

        //! FOR THE HORIZONTAL LINE OF DESK
        // TO LEFT HORIZONTAL LINE
        for (let k = pos - 1; k >= 0; k--) {
            if (this.isNotBlocking(rowNum, k, selfPosition)) {
                if (this.state[rowNum][k] === 50) continue;
                this.state[rowNum][k] = this.attackZone;
            } else {
                break;
            }
        }
        // TO RIGHT HORIZONTAL LINE
        for (let k = pos + 1; k < 8; k++) {
            if (this.isNotBlocking(rowNum, k, selfPosition)) {
                if (this.state[rowNum][k] === 50) continue;
                this.state[rowNum][k] = this.attackZone;
            } else {
                break;
            }
        }
    }

    bishopZone(selfPosition, rowNum, pos) {
        const numMainDiagonal = rowNum + pos;
        const numSecDiagonal = rowNum - pos;
        const whiteList = [selfPosition, this.blackKing];

        // FOR - TO TOP-RIGHT SKEW LINE
        loop: for (let i = rowNum; i >= 0; i--) {
            for (let k = pos; k < 8; k++) {
                if (i + k === numMainDiagonal) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }
        // FOR - TO TOP-LEFT SKEW LINE
        loop: for (let i = rowNum; i >= 0; i--) {
            for (let k = pos; k >= 0; k--) {
                if (i - k === numSecDiagonal) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }
        // FOR - TO BOTTOM-RIGHT SKEW LINE
        loop: for (let i = rowNum; i < 8; i++) {
            for (let k = pos; k < 8; k++) {
                if (i - k === numSecDiagonal) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }
        // FOR - TO BOTTOM-LEFT SKEW LINE
        loop: for (let i = rowNum; i < 8; i++) {
            for (let k = pos; k >= 0; k--) {
                if (i + k === numMainDiagonal) {
                    if (this.isNotBlocking(i, k, selfPosition)) {
                        if (whiteList.includes(this.state[i][k])) continue;
                        this.state[i][k] = this.attackZone;
                    } else {
                        break loop;
                    }
                }
            }
        }
    }

    kingZone(selfPosition, rowNum, pos) {
        const whiteList = [selfPosition, this.blackKing];

        for (let i = rowNum - 1; i <= rowNum + 1; i++) {
            for (let k = pos - 1; k <= pos + 1; k++) {
                if (!this.state[i] || k < 0 || k > 7 || whiteList.includes(this.state[i][k])) continue;
                if (this.isNotBlocking(i, k, selfPosition)) this.state[i][k] = this.attackZone;
            }
        }
    }

    horseZone(selfPosition, rowNum, pos) {
        const whiteList = [selfPosition, this.blackKing];
        const posMinus1 = pos - 1;
        const posMinus2 = pos - 2;
        const posPlus1 = pos + 1;
        const posPlus2 = pos + 2;

        for (let i = rowNum - 2; i <= rowNum + 2; i++) {
            if (!this.state[i]) continue;

            if (i === rowNum + 2 || i === rowNum - 2) {
                if (posMinus1 >= 0) {
                    if (
                        this.isNotBlocking(i, posMinus1, selfPosition) &&
                        !whiteList.includes(this.state[i][posMinus1])
                    ) {
                        this.state[i][posMinus1] = this.attackZone;
                    }
                }
                if (posPlus1 <= 7) {
                    if (
                        this.isNotBlocking(i, posPlus1, selfPosition) &&
                        !whiteList.includes(this.state[i][posPlus1])
                    ) {
                        this.state[i][posPlus1] = this.attackZone;
                    }
                }
            }
            if (i === rowNum - 1 || i === rowNum + 1) {
                if (posMinus2 >= 0) {
                    if (
                        this.isNotBlocking(i, posMinus2, selfPosition) &&
                        !whiteList.includes(this.state[i][posMinus2])
                    ) {
                        this.state[i][posMinus2] = this.attackZone;
                    }
                }
                if (posPlus2 <= 7) {
                    if (
                        this.isNotBlocking(i, posPlus2, selfPosition) &&
                        !whiteList.includes(this.state[i][posPlus2])
                    ) {
                        this.state[i][posPlus2] = this.attackZone;
                    }
                }
            }
        }
    }

    runAll() {
        this.queenZone(this.queen, ...this.positions[this.queen]);
        this.bishopZone(this.bishop, ...this.positions[this.bishop]);
        this.kingZone(this.king, ...this.positions[this.king]);
        this.horseZone(this.horse, ...this.positions[this.horse]);
    }
}
