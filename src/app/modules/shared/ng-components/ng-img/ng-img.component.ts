import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { PLACEHOLDER_IMAGES } from 'src/app/constants';

@Component({
    selector: 'img',
    template: ``,
    styles: [`
        :host {
            background-color: var(--light-gray);
        }
    `],
    host: {
        '(error)': 'updateUrl()',
        '[src]': 'src'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgImgComponent {
    @Input()
    src!: string;
    @Input() default: string;

    constructor(private el: ElementRef) {
        const img: HTMLImageElement = el.nativeElement;
        img.setAttribute('loading', 'lazy');

        if (img.classList.contains('user-placeholder')) {
            this.default = PLACEHOLDER_IMAGES.USER;
        } else {
            this.default = PLACEHOLDER_IMAGES.DEFAULT;
        }
    }

    updateUrl() {
        this.src = this.default;
        // this.el.nativeElement.classList.add('default-placeholder');
    }
}
