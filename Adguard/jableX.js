document.cookie = "zone-cap-3403709=1";
document.cookie = "kt_tcookie=1";
document.cookie = "ts_popunder=1";

var webList = [
'r.trwl1.com', 
'025pc.cn'
];


for (l = 0; l < webList.length; l++) {
var webSelectors = "a[href*='" + webList[l] + "']";

var google_cssSelectors = [".video-img-box.mb-e-20,.col-6.col-sm-4.col-lg-3"];
var huge = document.querySelectorAll( google_cssSelectors );
var i;

for (i=0; i< huge.length; i++){
if (huge[i].querySelectorAll( webSelectors ).length  > 0) {
huge[i].style.display = "none";
}
}

}