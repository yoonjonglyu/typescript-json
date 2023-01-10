import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectInternal = 
    _test_application("ajv")(
        "ObjectInternal",
        typia.application<[ObjectInternal], "ajv">(),
    );