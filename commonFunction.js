/**
 * CommonFunction
 */
class commonFunction {
    /**
     * Kiểm tra có phải là mảng ko
     * @param {*} data 
     * @returns là mảng  =  true / ko là mảng  = false
     */
    isArray(data) {
        return Array.isArray(data);
    }
    /**
     * Tạo ngẫu nhiên chuỗi guid
     * @returns Guid type '709cd343-0b88-d2a2-b569-f8ffd5afd679'
     */
    createGuid() {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * Log ra console đoạn message
     * @param {*} message nội dung cần log ra console
     * @returns message
     */
    logConsole(message) {
        return console.log(message);
    }
    isNullOrEmpty(data) {
        return !data || data === "";
    }
    /**
     * mã hóa sang base64
     * @param {*} value 
     * @returns base64
     */
    base64EndCode(value) {
        return this.isNullOrEmpty(value) ? value : btoa(value);
    }
    /**
     * giải mã base64
     * @param {*} value 
     * @returns 
     */
    base64Decode(value) {
        return this.isNullOrEmpty(value) ? value : atob(value)
    }
    /**
     * Hàm đổi từ tiếng việt sang tiếng anh (bỏ dấu tiếng việt)
     * @param {*} content 
     * @returns 
     */
    convertStringVNtoEn(content) {
        if (this.isNullOrEmpty(content)) {
            return content;
        }
        return content
            .replace(/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ầ|ấ|ẩ|ẫ|ậ/g, 'a')
            .replace(/đ/g, 'd')
            .replace(/e|è|é|ẽ|ẻ|ẹ|ê|ề|ế|ễ|ể|ệ/g, 'e')
            .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ/g, 'o')
            .replace(/ì|í|ỉ|ĩ|ị/g, 'i')
            .replace(/ý|ỳ|ỷ|ỹ|ỵ/g, 'y')
            .replace(/ù|ú|ủ|ũ|ụ/g, 'u')
            .replace(/Á|À|Ã|Ả|Ạ|Â|Ầ|Ấ|Ẫ|Ẩ|Ậ|Ă|Ằ|Ắ|Ẳ|Ẵ|Ặ/g, 'A')
            .replace(/Đ/g, 'D')
            .replace(/É|È|Ẻ|Ẽ|Ẹ/g, 'E')
            .replace(/Ó|Ò|Ỏ|Õ|Ọ/g, 'O')
            .replace(/Í|Ì|Ỉ|Ĩ|Ị/g, 'I')
            .replace(/Ý|Ỳ|Ỷ|Ỹ|Ỵ/g, 'Y')
            .replace(/Ù|Ú|Ủ|Ũ|Ụ/g, 'U');
    }
    /**
     * Loại bỏ toàn bộ khoảng trắng
     * @param {*} content 
     * @returns 
     */
    removeAllSpace(content) {
        return this.isNullOrEmpty(content) ? content : content.replaceAll(" ", "");
    }
    /**
     * So sánh 2 mốc thời gian (bỏ qua giở , phút , giây)
     * @param {*} date1 
     * @param {*} date2 
     * @returns -1 nếu date1 < date2 ,  0 nếu date1 = date2 , 1 nếu date1 > date2
     */
    compareTwoDateWithddMMYYYY(date1, date2) {
        if (this.isNullOrEmpty(date1) || this.isNullOrEmpty(date2)) {
            return null;
        }
        //clone ra để ko a/h đến 2 tham số truyền vào
        const date1Clone = new Date(date1);
        const date2Clone = new Date(date2);
        //loại bỏ giờ phút giây 
        date1Clone.setHours(0, 0, 0, 0);
        date2Clone.setHours(0, 0, 0, 0);
        return date1Clone.getTime() - date2Clone.getTime() > 0 ? 1 : date1Clone.getTime() - date2Clone.getTime() < 0 ? -1 : 0;
    }
    /**
     * So sánh 2 mốc thời gian (tính cả giở , phút , giây)
     * @param {*} date1 
     * @param {*} date2 
     * @returns -1 nếu date1 < date2 ,  0 nếu date1 = date2 , 1 nếu date1 > date2
     */
    compareTwoDateWithddMMYYYYhhSS(date1, date2) {
        if (this.isNullOrEmpty(date1) || this.isNullOrEmpty(date2)) {
            return null;
        }
        //clone ra để ko a/h đến 2 tham số truyền vào
        const date1Clone = new Date(date1);
        const date2Clone = new Date(date2);
        return date1Clone.getTime() - date2Clone.getTime() > 0 ? 1 : date1Clone.getTime() - date2Clone.getTime() < 0 ? -1 : 0;
    }
    /**
     * Lấy ra n phần tử trong mảng
     * @param {*} data mảng ban đầu
     * @param {*} n số lượng phần tử cần lấy
     * @param {*} index vị trí bắt đầu lấy (ngầm định lấy từ đầu)
     * @returns mảng với n phần tử cần lấy
     */
    takeArray(data, n, start = 0) {
        return !this.isArray(data) ? null : data.slice(start, n);
    }
    /**
     * Lấy ra những phần tử bị Duplicate trong mảng
     * @param {*} data mảng dữ liệu
     * @returns 
     */
    getDuplicateElementArray(data) {
        let result = [];
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (JSON.stringify(data[i]) === JSON.stringify(data[j])
                    && !result.find(x => JSON.stringify(x) === JSON.stringify(data[i]))
                ) {
                    result.push(data[i]);
                    continue;
                }
            }
        }
        return result;
    }
    /**
     * Check xem mảng có chứa phần tử bị Duplicate ko
     * @param {*} data data
     * @returns true/fa;se
     */
    checkArrayHasDupItem(data) {
        let result = false;
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (JSON.stringify(data[i]) === JSON.stringify(data[j])) {
                    result = true;
                    break;
                }
            }
            if (result === true) {
                break;
            }
        }
        return result;
    }
    /**
     * lấy ra danh sách phần tử bị trùng trong mảng.
     * Ko áp dụng cho mảng object
     * @param {*} data 
     * @returns 
     */
    getDuplicateElementArraySingle(data) {
        if (!this.isArray(data)) {
            return null;
        }
        return data.filter((item, index) => data.indexOf(item) != index)
    }
    /**
     * Kiểm tra email có đúng định dạng
     * @param {*} content 
     * @returns 
     */
    validateEmail(content) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(content);
    }
    /**
     * Làm tròn số
     * @param {*} value giá trị
     * @param {*} digit số cần làm tròn sau dấu phẩy
     * @returns 
     */
    roundNumber(value, digit) {
        if (this.isNullOrEmpty(value)) {
            return value;
        }
        if (!this.isNullOrEmpty(digit)) {
            const po = Math.pow(10, digit);
            return Math.round(value * po) / po;
        }
        return Math.round(value);
    }
    /**
     * Lấy ra value của property trong object
     * @param {*} obj Object
     * @param {*} key Property cần lấy value
     * @param {*} caseSensitive Có phân biệt chữ hoa chữ thường không , mặc định là không
     * @returns undified nếu k tìm thấy prop , nếu có prop thì trả về value
     */
    getValueOfPropertyObject(obj, key, caseSensitive = false) {
        if (obj && key) {
            if (caseSensitive) {
                return obj[key];
            }
            else {
                for (var k in obj) {
                    if (obj.hasOwnProperty(k) && k.toLowerCase() === key.toLowerCase()) {
                        return obj[k];
                    }
                }
                return;
            }
        }
    }
    /**
     * loại bỏ những phần tử null or undifed khỏi mảng
     * @param {*} data mảng cần lọc
     * @returns 
     */
    cleanArray(data) {
        if (this.isNullOrEmpty(data) || !this.isArray(data)) {
            return data;
        }
        return data.filter(i => i);
    }
    cloneArray(data){
        return data.slice(0);
    }
    cloneObject(data){
        return JSON.parse(JSON.stringify(data));
    }
}
export default new commonFunction();