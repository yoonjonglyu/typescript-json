import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagType = _test_validateStringify(
    "TagType",
    TagType.generate,
    typia.createValidateStringify<TagType>(),
    TagType.SPOILERS,
);