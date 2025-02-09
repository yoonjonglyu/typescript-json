import typia from "../../../../src";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayRecursiveUnionExplicit = 
    _test_application("swagger")(
        "ArrayRecursiveUnionExplicit",
        typia.application<[ArrayRecursiveUnionExplicit], "swagger">(),
    );