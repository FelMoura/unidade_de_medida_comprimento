class NmsController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        
        let  nano = document.getElementById('button5')
        let pic = document.getElementById('button6')
        let fe = document.getElementById('button7')
        let att = document.getElementById('button8')
        let zep = document.getElementById('button9')
        


        this.addEventListenerAll(button5,'mouseover mouseup mousedown', e=>{
            button5.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button6,'mouseover mouseup mousedown', e =>{
            button6.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button7,'mouseover mouseup mousedown', e =>{
            button7.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button8,'mouseover mouseup mousedown', e=>{
            button8.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button9,'mouseover mouseup mousedown', e =>{
            button9.style.cursor = 'pointer'
        })
        
     
     }

}