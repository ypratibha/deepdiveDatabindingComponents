import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', { static: true }) serContent;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serName.value,
      serverContent: this.serContent.nativeElement.value,
    });
  }

  onAddBlueprint(serName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serName.value,
      serverContent: this.serContent.nativeElement.value,
    });
  }
}
