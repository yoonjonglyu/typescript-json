import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TemplateConstant = _test_validateStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.validateStringify(input),
    TemplateConstant.SPOILERS,
);