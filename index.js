// bài 1
// sơ đồ 3 khối
// input: nhập ngày, tháng, năm
// process
// 1 lấy input
// 2 kiễm tra
// 3. log kq
// output ngày, tháng, năm




var vDay = prompt("Nhập Ngày");
var vMonth = prompt("Nhập Tháng");
var vYear = prompt("Nhập Năm");
vMonth *= 1;
vDay *= 1;
vYear *= 1;

function leapYear(vYear) {
    return ((vYear % 4 == 0 && vYear % 100 != 0) || vYear % 400 == 0);
}

function vDayInMonth(vMonth, vYear) {
    switch (vMonth) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            {
                return 31;
                break;
            }
        case 2:
            {
                if (leapYear(vYear)) {
                    return 29;
                }
                return 28;
            }
        case 4: case 6: case 9: case 11:
            {
                return 30;
            }
    }
}

function vDaysNext(vYear, vMonth, vDay) {
    //ta cần khai báo các biến vYearNext, vMonthNext, vDayNext là ngày tháng năm tiếp theo
    var vYearNext = vYear;
    var vMonthNext = vMonth;
    var vDayNext = vDay;

    var vYearx = vYear;
    var vMonthx = vMonth;
    var vDayx = vDay;
    //nếu ngày tháng năm thỏa mãn điều kiện của nó (nghĩa là tháng năm phải lớn hơn 0,....)
    if (vYear > 0 && vMonth > 0 && vMonth < 13 && vDay > 0 && vDay <= (vDayInMonth(vMonth, vYear))) {
        vDayNext = vDay + 1;
        vDayx = vDay - 1;
        //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
        if (vMonth != 12 && vDay == vDayInMonth(vMonth, vYear)) {
            vDayNext = 1;
            vMonthNext = vMonthNext + 1;


        }
        //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
        else if (vMonth == 12 && vDay == vDayInMonth(vMonth, vYear)) {
            vDayNext = 1;
            vYearNext = vYear + 1;
            vMonthNext = 1;

            vYearx = vYear;
        }
        else if (vMonth == 2) {
            //nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29
            if (leapYear(vYear)) {
                //nếu người dùng nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
                if (vDay == 29) {

                    vDayNext = vDay + 1;
                    vMonthNext = vMonth + 1;
                    vDayx = vDay - 1;

                }
            }
            //ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày
            else {
                //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
                if (vDay == 28) {
                    vDayNext = vDay + 1;
                    vMonthNext = vMonth + 1;
                    vMonthx = 1;
                }
            }
        }
    }
    document.writeln("Ngày hiện tại " + vDay + "/" + vMonth + "/" + vYear);
    document.writeln("Ngày tiếp theo " + vDayNext + "/" + vMonthNext + "/" + vYearNext);
    document.writeln("Ngày hôm qua " + vDayx + "/" + vMonthx + "/" + vYearx);
    document.writeln("Số ngày trong tháng: " + vDay);
}
vDaysNext(vYear, vMonth, vDay);

// bài 3:

/***
 * INPUT: 3 số nguyên, in ra cách đọc nó
 * 
 * PROCESS:
 * 1. lấy input
 * 2. tính
 * 3. log ra màn hình
 * OUTPIT: cách đọc của 3 số nguyên
 */

var a = 2 % 10;
var b = (30 / 10) % 10;
var c = 200 / 100;

if (a, b, c < 100 || a, b, c > 500) {
    console.log("cách đọc của 3 số nguyên là:");
} else {
    switch (c) {
        case 1: console.log("Một trăm ");
            break;
        case 2: console.log("Hai trăm ");
            break;
        case 3: console.log("Ba trăm ");
            break;
        case 4: console.log("Bốn trăm ");
            break;
        case 5: console.log("Năm trăm ");
            break;
    }
}
if (b % 10 == 0 && a != 0) {
    console.log("lẻ ", b);
} else {
    switch (b) {
        case 1: console.log("mười ");
            break;
        case 2: console.log("hai mươi ");
            break;
        case 3: console.log("ba mươi ");
            break;
        case 4: console.log("bốn mươi ");
            break;
    }
}
switch (a) {
    case 1: console.log("một ");
        break;
    case 2: console.log("hai ");
        break;
    case 3: console.log("ba ");
        break;
}