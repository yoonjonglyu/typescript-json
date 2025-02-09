import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectHierarchical = _test_assertParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assertParse<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);