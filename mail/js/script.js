const mailingList=[
    "marcorossi@st.it",
    "francoverde@st.it",
    "gianmarcosbocco@st.it",
    "cristianolarosa@st.it",
    "francescomarzano@st.it",
    "giorgiopower@st.it",
    "alessandroblu@st.it",
    "thomasgrigio@st.it"
]


const userchoice = prompt("scrivi la tua mail")

for(let i=0; i < mailingList.length; i++){
    if(userchoice==mailingList[i]){
        console.log('benvenuto')
    }
    else {
        console.log('non puoi accedere')
    
    }
}