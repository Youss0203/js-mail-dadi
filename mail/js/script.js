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

let utente = prompt("scrivi la tua mail")

if(newArray.includes(utente)){
    console.log('benvenuto')
}
else {
    console.log('non puoi accedere')

}
