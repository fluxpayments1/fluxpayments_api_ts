import { IPermissions } from "./IPermissions";
import { ISearchOptions } from "./ISearchOptions";
export type IPermissionsQuery = Partial<IPermissions> & Partial<ISearchOptions>;
