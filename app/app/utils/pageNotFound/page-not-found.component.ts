import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'page-not-found',
    template: `
        <div class="box">
        <h1>your page has not been found here</h1>
            <p>continue to dig arround: you'll end finding what you are looking for</p>
            <img src="http://md1.libe.com/photo/697100-cereal-guy-troll-face.jpg?modified_at=1417427548" />
    </div>
    `
})
export class PageNotFoundComponent {
}
