var CurrentUser = function (cukie) {
    if (cukie !== '' && cukie.indexOf("_!_") >= 0) {
        this.cukie = cukie;
        this.CukiArr = cukie.split('_!_');
        this.userName = this.CukiArr[2] + ' ' + this.CukiArr[3];
        this.accountType = this.CukiArr[4];
        this.password = this.CukiArr[5];
        this.partnerID = this.CukiArr[1];
        this.email = this.CukiArr[6];
        this.mobile = this.CukiArr[7];
        this.groupName = this.CukiArr[8];
    }
    else {
        this.cukie = '';
        this.CukiArr = [];
        this.userName ='';
        this.accountType = '';
        this.password = '';
        this.partnerID = '';
    }
}
