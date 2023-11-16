const newArray=[
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

for(let i=0; newArray.length; i++){
    if(userchoice==newArray){
        console.log('benvenuto')
    }
    else {
        console.log('non puoi accedere')
    
    }
}