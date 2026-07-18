const toggleBtn = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const navLinks = document.querySelectorAll('.sidebar a')

function toggleSidebar() {

    sidebar.classList.toggle('collapsed')

}

toggleBtn.addEventListener('click', (event) => {

    event.stopPropagation()
    toggleSidebar()

})