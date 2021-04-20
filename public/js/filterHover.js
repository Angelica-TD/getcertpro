const trigger = document.querySelector('.dropbtn')
const dropdownContent = document.querySelector('.dropdown-content')
const filterInput = document.querySelector('#filter-input')

trigger.addEventListener('click', ()=>{
	if(dropdownContent.classList.value.includes('show')){
		dropdownContent.classList.remove('show')
	}else{
		dropdownContent.classList.add('show')
	}
})

filterInput.addEventListener('keyup', ()=>{
	let filter, a, i;
	filter = filterInput.value.toUpperCase();
	a = dropdownContent.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
})