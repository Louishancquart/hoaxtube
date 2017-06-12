import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'video-box',
    templateUrl: 'video-box.component.html',
    styleUrls: ['video-box.component.css']
})


export class VideoBoxComponent {
}

// function insertTableIntoPlayer() {
//   var playerElement=document.getElementById("player");
//   var parent_Element=playerElement.parentElement;
//
//   var x = document.createElement("TABLE");
//   x.setAttribute("id", "myTable");
//   parent_Element.appendChild(x);
//
//   var y = document.createElement("TR");
//   y.setAttribute("id", "myTr");
//   document.getElementById("myTable").appendChild(y);
//
//   var z = document.createElement("TD");
//   z.appendChild(playerElement);
//   document.getElementById("myTr").appendChild(z);
//
//
//   var z2 = document.createElement("TD");
//   z2.setAttribute("id", "plugin");
//   document.getElementById("myTr").appendChild(z2);
// }
