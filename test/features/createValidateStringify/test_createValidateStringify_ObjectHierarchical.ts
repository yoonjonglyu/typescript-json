import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectHierarchical = _test_validateStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidateStringify<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);