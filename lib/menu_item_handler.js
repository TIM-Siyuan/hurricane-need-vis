
function MenuItemHandler(stakeHolderViewer) {
    this.stakeHolderViewer = stakeHolderViewer;
}

MenuItemHandler.prototype = {
    constructor: MenuItemHandler,

    onAdminBoardClick: function () {
        //this.showStakeHolders();
        
        this.stakeHolderViewer.showAdminBoardGroup();
    },
};