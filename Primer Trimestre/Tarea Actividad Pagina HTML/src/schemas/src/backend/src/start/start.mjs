import { TimeFormatBuilder } from '../build/BuildersExports.mjs';
import { browserDetector } from '../functions/browserDetector.mjs';
import { osDetector } from '../functions/osDetector.mjs';
class start {
    constructor() {
        this.timeNow = TimeFormatBuilder.GetTimeFormat(12);
        this.browser = browserDetector();
        this.os = osDetector();
    }
    main() {
        alert("Página principal cargada correctamente!\n\nHora actual: " + this.timeNow + "\nNavegador web: " + this.browser + "\nSistema Operativo: " + this.os + "\n\nBienvenido profesor!");
    }
}

export { start };