import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ConstantAtomicUnion = _test_validate(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createValidate<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);