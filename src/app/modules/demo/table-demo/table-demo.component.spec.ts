import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableDemoComponent} from './table-demo.component';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'ada-table',
    template: ''
})
class MockTableComponent {
    @Input()
    model: any;
}

describe('TableDemoComponent', () => {
    let component: TableDemoComponent;
    let fixture: ComponentFixture<TableDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableDemoComponent,
                MockTableComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Angular Design System Adapter');
    });
});
