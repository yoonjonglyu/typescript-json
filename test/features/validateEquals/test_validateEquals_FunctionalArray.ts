import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalArray = _test_validateEquals(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.validateEquals(input),
);