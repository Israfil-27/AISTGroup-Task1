document.addEventListener('DOMContentLoaded',  () => {
    const folderForm = document.getElementById('folderForm');
    const folderNameInput = document.getElementById('folderName');
    const rootFolder = document.getElementById('root');

    folderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const folderName = folderNameInput.value.trim();
        if (folderName !== '') {
            createFolder(folderName);
            folderNameInput.value = '';
        }
    });

    function createFolder(folderName) {
        const newFolder = document.createElement('div');
        newFolder.classList.add('folder');
        newFolder.innerHTML = `
            <span class="folder-name">${folderName}</span>
        `;
        rootFolder.querySelector('.children').appendChild(newFolder);
        attachFolderEvents(newFolder);
    }

    function attachFolderEvents(folder) {
        folder.addEventListener('click', function (event) {
            const target = event.target;
            if (target.classList.contains('folder-name')) {
                const newName = prompt('Enter new folder name:');
                if (newName !== null && newName.trim() !== '') {
                    target.textContent = newName.trim();
                }
            } else if (target.classList.contains('delete-folder')) {
                folder.parentNode.removeChild(folder);
            } else if (target.classList.contains('create-folder')) {
                const subfolderName = prompt('Enter subfolder name:');
                if (subfolderName !== null && subfolderName.trim() !== '') {
                    createFolder(subfolderName);
                }
            }
        });
    }
});