import { ISearchOptions } from ".";
import { IEmailConfirmation } from "./IEmailConfirmation";

export type IEmailConfirmationQuery = Partial<IEmailConfirmation> & Partial<ISearchOptions>;
