var request = new XMLHttpRequest();

request.open('GET', 'https://private-a047d4-personaldate.apiary-mock.com/datas', true);
request.onload = function(){
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(datas => {

            const name = document.getElementById("nama")
            name.textContent = datas.names
    
            const job = document.getElementById("job")
            job.textContent = datas.personalJob
    
            const slogan = document.getElementById("slogan")
            slogan.textContent = datas.slogan
    
            const skillSatu = document.getElementById("skillsatu")
            skillSatu.textContent = datas.skills[0].skillNameSatu

            const rateSatu = document.getElementById("rateSatu")
            rateSatu.textContent = datas.skills[0].rateSatu + "%"

            const skillDua = document.getElementById("skilldua")
            skillDua.textContent = datas.skills[1].skillNameDua

            const rateDua = document.getElementById("rateDua")
            rateDua.textContent = datas.skills[1].rateDua + "%"

            const skillTiga = document.getElementById("skilltiga")
            skillTiga.textContent = datas.skills[2].skillNameTiga
            
            const rateTiga = document.getElementById("rateTiga")
            rateTiga.textContent = datas.skills[2].rateTiga + "%"

            const skillEmpat = document.getElementById("skillempat")
            skillEmpat.textContent = datas.skills[3].skillNameEmpat

            const rateEmpat = document.getElementById("rateEmpat")
            rateEmpat.textContent = datas.skills[3].rateEmpat + "%"

            const skillLima = document.getElementById("skilllima")
            skillLima.textContent = datas.skills[4].skillNameLima

            // const rateLima = document.getElementById("rateLima")
            // rateLima.textContent = datas.skills[3].rateEmpat + "%"

            const skillEnam = document.getElementById("skillenam")
            skillEnam.textContent = datas.skills[5].skillNameEnam

            const rateEnam = document.getElementById("rateEnam")
            rateEnam.textContent = datas.skills[5].rateEnam + "%"
        })
    }
}

request.send();
