import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectAlias = _test_isParse(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isParse<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);