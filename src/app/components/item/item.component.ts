import { outputAst } from "@angular/compiler";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Item } from "src/app/interfaces/iItem";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
  deletarItem() {
    console.log("estao tentando me calar");
    this.emitindoItemParaDeletar.emit(this.item.id);
  }
  ngOnDestroy() {
    console.log("conseguiram me calar");
  }
}
