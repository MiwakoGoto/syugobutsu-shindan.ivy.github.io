// diagnosis.js

function diagnose() {
    const yearInput = document.getElementById('yearInput');
    const errorMessage = document.getElementById('error-message');
    const year = parseInt(yearInput.value, 10);

    // 1. 入力値のバリデーション
    if (isNaN(year) || year < 1900 || year > 2100) {
        errorMessage.textContent = '有効な西暦（1900〜2100）を入力してください。';
        return;
    }

    errorMessage.textContent = ''; // エラーメッセージをクリア

    // 2. 干支のインデックスを計算
    // 干支のサイクルは12年です。
    // (西暦 - 4) % 12 の余りを使って、守護仏を決定します。
    // 順番は「子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥」に対応する仏様と合わせます。
    const index = (year - 4) % 12; // (例: 1984年 (子) の場合 -> (1984 - 4) % 12 = 0)

    // 3. 守護仏と対応するファイル名のマッピング
    // index 0:子(千手観音), 1:丑・寅(虚空蔵), 2:丑・寅(虚空蔵), 3:卯(文殊), 4:辰・巳(普賢), 
    // 5:辰・巳(普賢), 6:午(勢至), 7:未・申(大日), 8:未・申(大日), 9:酉(不動明王), 
    // 10:戌・亥(阿弥陀), 11:戌・亥(阿弥陀)
    
    // 干支のインデックスに基づいて、対応するファイル名を取得
    let fileName;

    switch (index) {
        case 0: // 子
            fileName = 'senju.html';
            break;
        case 1: // 丑
        case 2: // 寅
            fileName = 'kokuzou.html';
            break;
        case 3: // 卯
            fileName = 'monju.html';
            break;
        case 4: // 辰
        case 5: // 巳
            fileName = 'fugen.html';
            break;
        case 6: // 午
            fileName = 'seishi.html';
            break;
        case 7: // 未
        case 8: // 申
            fileName = 'dainichi.html';
            break;
        case 9: // 酉
            fileName = 'fudou.html';
            break;
        case 10: // 戌
        case 11: // 亥
            fileName = 'amida.html';
            break;
        default:
            // 基本的にここに到達することはありませんが、念のため
            errorMessage.textContent = '診断エラーが発生しました。';
            return;
    }

    // 4. 対応する紹介ページへ遷移
    window.location.href = fileName;
}