//mixiup filter portfolio
let mixerPortfolio = mixiup(' .work_container',{
    selectors: {
        target: '.work_card'
    },
    animation:{
        duration:300
    }
});

//link active work
const linkeWork = document.querySelectorAll('.work_item')

function actievWork() {
    linkeWork.forEach(l=> i.classList.remove('activeWork'))
    this.classList.add('activeWork')
}

