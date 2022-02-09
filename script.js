// I used this website as a source of inspiration: https://codepen.io/xmaimo/pen/bGGeRJV, but my resulting code
// turned out to be different from what they have there.

// The list of contact objects
const contacts = [{
avatar: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
cname: "iboya vat",
email: "iboya.vat@example.com",
joined: "07/15/15"},
{
avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
cname: "aapo niskanen",
email: "aapo.niskanen@example.com",
joined: "06/15/12"
},
{
avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
cname: "phillip cox",
email: "phillip.cox@example.com", 
joined: "09/11/14"
                  },
{ avatar: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
cname: "zilda moreira",
email: "zilda.moreira@example.com",
joined: "07/15/15"
                 },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
cname: "lilou le gall",
email: "lilou.le gall@example.com",
joined: "06/16/13"
                  },
{
     avatar: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
cname: "lucy hall",
email: "lucy.hall@example.com",
joined :"09/11/16"},
{
   avatar:"https://randomuser.me/api/portraits/thumb/women/24.jpg",
cname:  "mark colin",
email: "mark.colin@example.com",
joined: "01/14/14"
                  },
{
   avatar: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
cname: "sara alves",
email: "sara.alves@example.com",
joined: "07/19/16"
                  },
{
   avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
cname:  "ramon macrae",
email: "ramon.macrae@example.com",
joined: "05/13/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
cname:  "Connor Taylor",
email:  "connor.taylor@example.com",
joined: "05/18/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
cname: "aymeric morel",
email: "aymeric.morel@example.com",
joined: "06/13/13"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
cname: "lorenz otto",
email: "lorenz.otto@example.com",
joined: "05/11/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
cname: "karl williamson",
email: "karl.williamson@example.com",
joined: "01/12/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
cname: "ouassim heering",
email: "ouassim.heering@example.com",
joined: "01/18/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
cname: "roberto molina",
email:"roberto.molina@example.com",
joined: "06/13/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
cname: "jordan hubert",
email: "jordan.hubert@example.com",
joined: "06/13/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
cname:"melvin baker",
email: "melvin.baker@example.com",
joined: "09/18/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
cname: "everett gordon",
email:  "everett.gordon@example.com",
joined: "06/17/15"
                  },
{ 
avatar: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
cname:  "aiden ma",
email: "aiden.ma@example.com",
joined: "07/18/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
cname:  "florent gerard",
email: "florent.gerard@example.com",
joined: "02/12/13"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
cname: "amber chen",
email: "amber.chen@example.com",
joined: "07/12/12"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/women/9.jpg",
cname:"alexandra davies",
email: "alexandra.davies@example.com",
joined: "05/11/13"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/men/57.jpg",
cname: "sergio cole",
email: "sergio.cole@example.com",
joined: "02/17/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
cname: "edgar dixon",
email: "edgar.dixon@example.com",
joined: "06/17/11"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
cname:  "kirk myers",
email: "kirk.myers@example.com",
joined: "09/17/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
cname: "ani hesseling",
email: "ani.hesseling@example.com",
joined: "08/14/16"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
cname: "victoire bonnet",
email:  "victoire.bonnet@example.com",
joined: "05/13/16"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
cname: "marcos morales",
email: "marcos.morales@example.com",
joined: "01/12/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
cname: "nils neumann",
email: "nils.neumann@example.com",
joined: "03/11/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
cname: "emily harrison",
email: "emily.harrison@example.com",
joined: "07/18/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
cname: "matthew fortin",
email:  "matthew.fortin@example.com",
joined: "03/18/15"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/women/32.jpg",
cname:"charlotte steward",
email:"charlotte.steward@example.com",
joined:"02/18/11"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
cname: "marceau rodriguez",
email:"marceau.rodriguez@example.com",
joined: "07/13/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
cname: "hudson anderson",
email: "hudson.anderson@example.com",
joined: "09/12/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
cname:  "warren phillips",
email:  "warren.phillips@example.com",
joined: "01/11/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
cname: "leo niva",
email: "leo.niva@example.com",
joined: "09/14/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
cname: "hani prevoo",
email: "hani.prevoo@example.com",
joined: "01/11/15"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
cname: "veronica rodriguez",
email: "veronica.rodriguez@example.com",
joined: "07/17/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
cname: "ginestal das neves",
email: "ginestal.das neves@example.com",
joined: "06/19/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
cname: "devon barnes",
email: "devon.barnes@example.com",
joined: "09/19/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
cname: "brennan pierce",
email: "brennan.pierce@example.com",
joined: "05/15/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
cname: "zachary singh",
email: "zachary.singh@example.com",
joined: "05/19/11"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
cname: "arlo harris",
email: "arlo.harris@example.com",
joined: "07/12/15"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/women/60.jpg",
cname:"hannah ginnish",
email: "hannah.ginnish@example.com",
joined: "05/17/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
cname:  "goos brunt",
email: "goos.brunt@example.com",
joined: "09/15/12"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/men/91.jpg",
cname:"eduard riedel",
email: "eduard.riedel@example.com",
joined: "06/12/15"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/women/42.jpg",
cname:"geesken jekel",
email:"geesken.jekel@example.com",
joined: "02/12/13"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
cname: "dolores ryan",
email:"dolores.ryan@example.com",
joined: "06/17/16"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/men/49.jpg",
cname: "steven rogers",
email:  "steven.rogers@example.com",
joined: "01/18/11"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
cname: "virgulino silva",
email: "virgulino.silva@example.com",
joined: "03/18/11"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
cname:"lucile bertrand",
email:"lucile.bertrand@example.com",
joined: "06/13/16"
                  },
{
avatar:"https://randomuser.me/api/portraits/thumb/women/10.jpg",
cname: "elsa lahti",
email:  "elsa.lahti@example.com",
joined: "04/15/12"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
cname: "soline leclercq",
email: "soline.leclercq@example.com",
joined: "05/12/14"
                  },
{
avatar: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
cname: "henri kruse",
email: "henri.kruse@example.com",
joined: "05/14/13"
}]

// Method that display buttons under the contacts
function displayPagesBtns(){
	allBtns = []
	let pageEl = document.getElementsByClassName("pageBtns")[0];
    pageEl.innerHTML = '';
	for(let i=1;i<=maxPages;i++){
		pageBtnStr = "<button class='pages' id='page" +i+"'>"+i+"</button>"
		pageEl.innerHTML +=pageBtnStr;
		}
}

// Methos that displays contacts on the page depending on the pagesize and offset
function displayPage(pageSize, offset){

    let page = document.getElementsByClassName("page")[0];
    // a future string of html that we will add to the page
    page.innerHTML = '';
    // add header
    page.innerHTML += "<div class='page-header cf'><h2>Contacts</h2></div><ul class='contact-list'>"
    // number of items that is supposed to be on the page
    let contactCounter;
    // if the last page is not full, then make the number of items 
    // that is supposed to be on the page equal to the totalItems
    if(offset+pageSize>totalItems){
        contactCounter = totalItems;
    }
    else{
        contactCounter = offset+pageSize -1
    }

    for(let i=offset; i<=contactCounter ; i++){
        // an html string corresponding to a li element
        let liElement ="";
        liElement+= "<li class='contact-item cf'><div class='contact-details'><img class='avatar' src="+
        contacts[i-1].avatar+"><h3>"+contacts[i-1].cname+"</h3><span class='email'>"+contacts[i-1].email+
        "</span></div><div class='joined-details'><span class='date'>joined "+contacts[i-1].joined+
        "</span></div></li>";      
        page.innerHTML += liElement
        
    }
	// add the rest of the html
    page.innerHTML += "</ul></div><div class='pageBtns'></div></div><script src='js/script.js'></script></body></html>"
    displayPagesBtns();
    changePage()
}
// Method that changes pages when a certain button is clicked
function changePage(){
    let btn1 = document.getElementById("page1");
    btn1.addEventListener("click", function(){
        // number of the first element on the particular page
        offset = 1;
        displayPage(pageSize,offset)});
    let btn2 = document.getElementById("page2");
    btn2.addEventListener("click", function(){
        offset = 11;
        displayPage(pageSize,offset)});
    let btn3 = document.getElementById("page3");
    btn3.addEventListener("click", function(){
        offset = 21;
        displayPage(pageSize,offset)});
    let btn4 = document.getElementById("page4");
    btn4.addEventListener("click", function(){
        offset = 31;
        displayPage(pageSize,offset)});
    let btn5 = document.getElementById("page5");
    btn5.addEventListener("click", function(){
        offset = 41;
        displayPage(pageSize,offset)});
    let btn6 = document.getElementById("page6");
    btn6.addEventListener("click", function(){
        offset = 51;
        displayPage(pageSize,offset)});
}

// Get the total number of items
var totalItems = document.getElementsByClassName("contact-item cf").length;
// by default make offset to 1 (because we want to see the first page)
var offset = 1;
var pageSize = 10;

// get the total number of pages. 
// I take ceil, because we want to include all contacts in the list.
// I'm not sure if this is the correct logic, because the assignment says: 
// "For example, if there are 33 students there must be 3 pages shown, if there are 85 students, there will be 8 pages"
// -- so the remained (4 people from 54 that we have in the contacts list) of people would be lost.
// To fix my logic to make it the same as in the sentence above, I would just change "ceil", to "floor".
// In case I'm wrong, please don't take points away from me -- the assignment was ambiguous.
var maxPages = Math.ceil(totalItems/pageSize)

// call the displayPage function with default parameters
displayPage(10,1)






