class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    constructor(iconCount, folderCount) {
        this.iconCount = iconCount;
        this.folderCount = folderCount;
    }

    createIcon(iconCount, order){
        const icon = new Icon();
        icon.name = '아이콘' + parseInt(order);
        icon.order = order;

        return icon;
    }

    appendIcon(iconCount) {

        if(iconCount > 0) {
            for(let i=0; i<iconCount; i++){
                const desktopView = document.querySelector('.icons');
                   const icon = this.createIcon(iconCount, parseInt(i)+ 1);

                const createLiElement = document.createElement('span');
                createLiElement.classList.add('icon-icon');
                createLiElement.setAttribute('order', icon.order);
                createLiElement.textContent = icon.name;
                desktopView.append(createLiElement);
            }

        }

    }

    createFolder(folderCount, order){
        const folder = new Folder()
        folder.name = '폴더' + parseInt(order);
        folder.order = order;

        return folder;
    }


    appendFolder(folderCount){

        if(folderCount > 0){

            for(let i=0; i<folderCount; i++){
                const desktopView = document.querySelector('.icons');
                    const folder = this.createFolder(folderCount, parseInt(i + 1));

                const createLiElement = document.createElement('span');
                createLiElement.classList.add('icon-folder');
                createLiElement.setAttribute('order', parseInt(this.iconCount + i +1).toString());
                createLiElement.textContent = '폴더' + parseInt(this.iconCount + i + 1).toString();
                desktopView.append(createLiElement);
            }

        }
    }

}

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}
