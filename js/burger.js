
class Hamburger {
    constructor(data) {
        this.data = data;
        this.userSelections = this._serializeForm(this.data)
        this.bd = [
            { id: 'max', rur: 100, cal: 40 },
            { id: 'min', rur: 50, cal: 20 },
            { id: 'cheese', rur: 10, cal: 20 },
            { id: 'salad', rur: 20, cal: 5 },
            { id: 'spice', rur: 15, cal: 0 },
            { id: 'mayo', rur: 20, cal: 5 },]
    }

    _serializeForm(formNode) {
        const { elements } = formNode
        const data = Array.from(elements)
            .filter((item) => !!item.checked)
            .map((element) => {
                const { id, name, value } = element
                return { id, name, value }
            })
        return data;
    }

    #dataBuilder() {
        let sums = { cal: 0, rur: 0 }
        for (let item of this.userSelections) {
            for (let i of this.bd) {
                const { id, rur, cal } = i
                if (id == item.id) {
                    sums.cal += cal;
                    sums.rur += rur;
                }
            }
        }
        return sums
    }
    printData() {
        console.log(this.userSelections)
    }

    calculatePrice() {
        let { rur } = this.#dataBuilder()
        return rur
    }
    calculateCalories() {
        let { cal } = this.#dataBuilder()
        return cal
    }
}

let applicantForm = document.getElementById('burger-sum');

applicantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const init = new Hamburger(applicantForm);
    document.querySelector('.info').innerHTML = `Ваш бургер стоит: 
        ${init.calculatePrice()} руб. и обладает калорийностью: 
        ${init.calculateCalories()} кал.`;
})




