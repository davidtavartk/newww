"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatunaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_datuna_dto_1 = require("./create-datuna.dto");
class UpdateDatunaDto extends (0, mapped_types_1.PartialType)(create_datuna_dto_1.CreateDatunaDto) {
}
exports.UpdateDatunaDto = UpdateDatunaDto;
//# sourceMappingURL=update-datuna.dto.js.map